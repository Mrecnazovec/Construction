let touchstartX = 0;
        let touchendX = 0;
        let touchstartY = 0;
        let touchendY = 0;

        const swipeSection = document.getElementById('swipeSection');

        swipeSection.addEventListener('touchstart', handleTouchStart, false);
        swipeSection.addEventListener('touchend', handleTouchEnd, false);
        swipeSection.addEventListener('mousedown', handleMouseDown, false);
        swipeSection.addEventListener('mouseup', handleMouseUp, false);

        function handleTouchStart(event) {
            touchstartX = event.changedTouches[0].screenX;
            touchstartY = event.changedTouches[0].screenY;
        }

        function handleTouchEnd(event) {
            touchendX = event.changedTouches[0].screenX;
            touchendY = event.changedTouches[0].screenY;
            handleSwipe();
        }

        function handleMouseDown(event) {
            touchstartX = event.screenX;
            touchstartY = event.screenY;
        }

        function handleMouseUp(event) {
            touchendX = event.screenX;
            touchendY = event.screenY;
            handleSwipe();
        }

        function handleSwipe() {
            const horizontalDiff = touchendX - touchstartX;
            const verticalDiff = touchendY - touchstartY;

            if (Math.abs(horizontalDiff) > Math.abs(verticalDiff)) {
                if (horizontalDiff > 0) {
									document.getElementById("projects").scrollIntoView();
                } else {
                    console.log('Swiped left');
                }
            } else {
                if (verticalDiff > 0) {
                    console.log('Swiped down');
                } else {
                    console.log('Swiped up');
                }
            }
        }