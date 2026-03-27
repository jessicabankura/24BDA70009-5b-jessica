document.addEventListener('DOMContentLoaded', () => {
    console.log('EduTrack Pro UI Initialized');

    // Real-time Search Logic
    const searchInput = document.getElementById('studentSearch');
    const studentCards = document.querySelectorAll('.student-card');
    const studentGrid = document.getElementById('studentGrid');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            let visibleCount = 0;

            studentCards.forEach(card => {
                const searchData = card.getAttribute('data-search');
                if (searchData.includes(term)) {
                    card.style.display = 'flex';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            // Handle no results state
            let noResultsMsg = document.getElementById('noResultsMsg');
            if (visibleCount === 0 && term !== '') {
                if (!noResultsMsg) {
                    noResultsMsg = document.createElement('div');
                    noResultsMsg.id = 'noResultsMsg';
                    noResultsMsg.className = 'card empty-state';
                    noResultsMsg.innerHTML = `
                        <i class="fas fa-search"></i>
                        <h2>No matches found</h2>
                        <p>Try searching for something else</p>
                    `;
                    studentGrid.appendChild(noResultsMsg);
                }
            } else if (noResultsMsg) {
                noResultsMsg.remove();
            }
        });
    }

    // CSV Export Logic
    const exportBtn = document.getElementById('exportCSV');
    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            const rows = [['Name', 'Email', 'Course', 'Joined Date']];
            studentCards.forEach(card => {
                if (card.style.display !== 'none') {
                    const name = card.querySelector('h3').innerText;
                    const email = card.querySelector('p:nth-of-type(1)').innerText.trim();
                    const course = card.querySelector('.badge').innerText;
                    const joined = card.querySelector('p:nth-of-type(2)').innerText.replace('Joined ', '').trim();
                    rows.push([name, email, course, joined]);
                }
            });

            const csvContent = "data:text/csv;charset=utf-8,"
                + rows.map(e => e.join(",")).join("\n");

            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", `students_export_${new Date().toISOString().split('T')[0]}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    // Confirm delete
    const deleteButtons = document.querySelectorAll('form[action*="delete"] button');
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (!confirm('Are you sure you want to delete this student record? This action cannot be undone.')) {
                e.preventDefault();
            }
        });
    });
});
