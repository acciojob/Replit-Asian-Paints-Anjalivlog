//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
      const colorForm = document.getElementById('colorForm');
      const gridItems = document.querySelectorAll('.grid-item');

      colorForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const blockId = document.getElementById('block_id').value;
        const color = document.getElementById('colour_id').value;

        gridItems.forEach(item => {
          item.style.backgroundColor = 'transparent';
        });

        const targetBlock = document.getElementById(blockId);
        if (targetBlock) {
          targetBlock.style.backgroundColor = color;
        } else {
          alert('Invalid block ID');
        }
      });

      document.getElementById('reset_button').addEventListener('click', function () {
        gridItems.forEach(item => {
          item.style.backgroundColor = 'transparent';
        });
      });
    });
