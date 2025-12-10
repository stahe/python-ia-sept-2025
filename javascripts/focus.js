
        document.addEventListener("DOMContentLoaded", function() {
            var header = document.querySelector(".md-header__inner");
            if (!header) return;
            
            var button = document.createElement("button");
            button.className = "md-header__button md-icon";
            button.title = "Mode Focus (Masquer/Afficher les menus)";
            button.setAttribute("aria-label", "Mode Focus");
            
            // Icône SVG (Format 'Fit Screen')
            button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>';
            
            button.onclick = function() {
                document.body.classList.toggle("focus-mode");
            };
            
            var search = document.querySelector(".md-search");
            if (search) {
                header.insertBefore(button, search);
            } else {
                header.appendChild(button);
            }
        });
        