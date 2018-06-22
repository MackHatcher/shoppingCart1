angular.module('shoppingCart')
    .service('itemService', function() {
        this.items = [
           {
                type: 'Hickory',
                category: "drumsticks",
                quantity: 10,
                price: 12.00,
                counter: 1,
                image: "data:image/webp;base64,UklGRjoKAABXRUJQVlA4IC4KAABQPQCdASosASwBPrFYpEykIyIhIpdouIgWCelu4XHhCBsav2dH2YXTctehP+C///fc//no27w/uEr9VfO1Ij4SS2fsF7BfxruN70yADvzp3P6RRyZEUav0AdND6t9gP9U/+X1+vQs/aoQnIaZ8MxUFTm13Ac7wzFQVObXcBzvDMVAjX5gmKVhNruA53hmJiPlUvs0+7+9wu2FECfDMVBU5s5unI/ZkL8XMhl9RbXHk5PbYjjubhmKgqcHyOQd2vv3OEUk6ugsXhu/5NYBKMZkdObXcBzRkE5lwslQI2YqSCKmSDhVx9uaFswHO8MxUFEAcNao1z+T47iWSGrR/5iA24PPLi1XDTPa/mHxCkROi+FuVGXLpfyza8KDQZODknneGYqCpNqwr11SCcF9sr20lzUtrRA3/h3eGYqCpzMakK1uXDgjxAxNHOT6osST2ihnmKgqc2u3hatuG0x1W255bZtb3eYu5ulxeGvU5BU5tdvD0Udt7DmazF/iYa5ZzEyoiQ6Vm3D7+uLVcNM9tBOw2TSNRd4jr6ByKP/SZRfzgoC0r2o5BU5tdwCDRaQySG2sMEBB3iRtAIXaBRQzcMxUFTmZR8l1yDzAaBcmrMA53hmKgqczIa5jpRwaZ8MxUFTm13Ac7wzFQVObXcBzvDMVBU4AAAP7+vRAAAAC4c5NsqOkUobKpjv0w+gxUvsFZx153NWrQ7eXTRNTSvAGibhvcugBfYIQ63T0X9SvHI1insDnWA0PtlgTobw9g2aH73YE4C1bA/R2/zEREr1bCavnzWGxeL6+qN6xICcnVEFhoE4Yji+qMwyFGaVT3UrCuoj7ICZrQC3kTIKW91I7f/6SbXL4jE1iYwf8a6PXRzPexJ1y+44xXezWQQCg//XwSj/Y1+X6s+dh6k+AeSl39U8PIf2uBKVT7g5dua0kgGmvWGX4lnDKzzZC/RGWwRS5LbKZ1HQhV4fv/rgv8QMNM2KcLRV/VwMMl3KOUcPvhuOSN/In8w8sM1n3uZ5T4KekDHL9P9Ye+GIb7Fs7CJnvyQnG/mdsDUPiU7vZBP8mQ+GNwSBxsdrcguyRJ7l4cLJjtZsWWNxurceCXIU1s+EPDMSQ1gu4IyNy8ne1uGTsNJBk7nD6dJP2/SQFac+APfcSUgJwzeSSXG/xzQnxEXTVlV49qefl8r6OzLmZ5FV8m1zEeDS/M38+5pavV5P/Bh7cwPF5eRDY2++0YRol3qCuUEkZ7y497XlnRVMaX5Pr9/QHjS8p+0wIqhgjBvnBSa33vCjx9EMjV0fHZvjoyffI7O8Zo/dGDUuFOOuJAcBlC64arUmEZ8JST3qVgJ+xLY8/+ytLo9YsCo9rWevAWpxGiGd9aASV/ZnB4aU/PrSwJsP4/QC3QZCcOCKnR5WVnhHFhkX0LT1oxO5+oX8CkQvSYwQBRtRNKxHGGQnUkwYaRgD+uLQNTV1V6LWEvqSzaobWhnFM4v39C4eNUZAcHIxqCCEkK4fGHqO9CJCq/b18IauUsw10c8Eqq1hIfmJzS3AahCpXXRoHuQEWzUH8chadHFKuyFn9H/pTZMjeiZI70JrhzlTc/rhM/S15XfDyYQzNqkNwuVCZXK5GdjmWRv03N8dcGMFK6CAiGrn0shvrgAAlcVPszsLIj2CA0LIY+defWOmFn1D49eJicCZ7BoN9H9YORP+yzpn8S6Q8B3/IPQ8rH8iM/RSb0MeKJj2OoyknXYfHshqYP0ZQa0Iohgt9sZOoqLzhV2PdGKIYN3efUOP7bGDrCyif0eJFxeVyXW7nq8bv1pkJPcYfe7PGyejeEeMdiDNoTEH6EACgxo+gTx0qbaNu3oykx2MPBWOXup/e36na+PBm7W38ymXbg/uFALyKIwgoEfJISJ/ow6HqdqX9PhxGwVx+5qLYce756OQlb4pAClZnsqr3ZM+GUDYm6+4M+1FTE584+tCpZztbrEdnAW95mgnJ+VxWFLwHryyxlTkGe4pAAf+BClfcewABqXDq9tWY4ipiUMN05npGKmot4WpLjpQ4JE9oSAGkmfBKXo7RDYQlV2ClJdewaHECe92AmmsCVYUm3ev9Ny0OxPHdDJemTlAEpTcXEbrhF9MYdtwTOH/W9ma1re/0xZqoYZ/WtrM1p7Nos5OuTPC1SyuQaF16igE8raJbZ1NMhBGIi1AFJAbVvELgEBnD/H/d/sUoR/lD+fwqBj9DkUy/Z1x/GcRZZ/eD2w6dDTGGt/FutOXo4xH2qhNXPQ2e6dDUtDRKf7sjfq2I8pTCZRBZPP4s/f2SWfcTY963AnDtAUUsss3za8S8lVq1wF4TQuVi8DY5eExLECLfNo1Ug05eN85OoGWeadliebpsAAQ3B/liAvx2g7Bx51Xx1Ee2XGwDhmIJRmkM1diajTJVyYbwC+92zQ5vjmGbpc4O6SU0djxMXZHBmDBSePkIlR87dvCazJrs2DKF1z/urQs/IynU9Hxh0XTeEDTfnfmOidu57O6Z2DDMvOMDn6f74m6+hKAu1M+GdzaVZZLkOImrhUFPARKgWG+wAO3KEbf2sgPpP8NdDlCvUJa+HBmV38zIc/vBgxDGIROAMIWVHhSEYNYc8NMuuZXljTnor4RFy0MtmwkJF/WrGL0gmZpnFay9SnQVc0F+Rn+7zu2z5nr37UzxlcByWiYvqQghp0IQjiBJukC4qGTO0L29CB6OzEZiShEqPUeFx7X+97hC8pm6zdqNdl6Tm63Xdbfwxd7erfOSAovhMhUkAJ5WgZ3EjTgXkT4DfT69AiOEF8syvDrR0Osve7hsbAUdS6ItT+NM+HoC0vn4GtGxmfVvQzfjN4MkLj4w+AX3QEqwEEE85rQXxrpH5i6iZn3GVAOHtsopo8jZNPsQcppLnTfPlffTHpbY5TlOc6fH2n2ZvBQNyPClJXM2M0bfpgp1xdnMoz91r9baToZqQnEcRHi1LCBCFq5tJzcvePJDknytYIP3/9S3jOWeg1tPz+AG3Zuc9SV1/8Qk4r7vf82mI2FXq7p0GP5sLwkTd73hG17LVeO0VcmeSK0DAkXeY/95LgXFZcy6dYIF8oPKxS53IP5DrVrigOlB5+ogAn4jNNmy7oi1z4b6Bwj7Ajvjrc3NOxjYrjTu5yHDoWBXer5UtaQyskhu1IWw9NUfRls1psw9Fb+ORDavGceLaV9V9Dn4O1bijrfE3j0LiVXktnlNg9xzoMrjZFmo6bK8x0d4HtKbjT7hhZSjPvQSvXdCxt+BVl/GrKYm4v791dhvQtbncxd181OROkWcHK+oZPN6gzPes1kbtUvJ0wjROn3qdwe4c5MC1DBpeLE5HWJLpeD6sXGyp7bdrToYncV+C2hQAi98UX1fyR7DOgmASK/vbT3fANNOcqTUU4aRIf+cTJsp1nQy0WrsNeGoJe+o1qK59EPKF2TRzTr3rwEblJVG1gIs9L624M8LyCHVN8EXKBmMkOzlAcYZaAAAAAAAAAA=="
              },
              {
                type: 'Cherry',
                category: "drumsticks",
                quantity: 15,
                price: 14.00,
                counter: 1,
                 image: "data:image/webp;base64,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"
              },
              {
                type: 'Maple',
                category: "drumsticks",
                quantity: 15,
                price: 13.00,
                counter: 1,
                image: "data:image/webp;base64,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"
              },
            {
                type: 'Crash',
                category: "cymbal",
                quantity: 7,
                price: 180.00,
                counter: 1,
                image: 'https://media.guitarcenter.com/is/image/MMGS7/A-Custom-Crash-Cymbal-20-in./440335000000089-00-500x500.jpg'
              },
              {
                type: 'Ride',
                category: "cymbal",
                quantity: 3,
                price: 220.00,
                counter: 1,
                image: 'https://media.musiciansfriend.com/is/image/MMGS7/ZBT-Ride-Cymbal-22-in./444593000000005-00-500x500.jpg'
              },
              {
                type: "Maple",
                category: "snare",
                quantity: 3,
                price: 500.00,
                counter: 1,
                image: 'https://www.long-mcquade.com/files/93766/e3b48adb3a2274488fdf74b1ed8071f1.'
              },
              {
                type: "Aluminum",
                category: "snare",
                quantity: 6,
                price: 250.00,
                counter: 1,
                image: 'https://media.sweetwater.com/api/i/q-82__ha-3d0905afc12f193c__hmac-d8d5a6ef1d7361381c0b3dca237102cb195bf41e/images/items/750/LB417-large.jpg'
              },
              {
                type: "Fiberglass",
                category: "snare",
                quantity: 3,
                price: 650.00,
                counter: 1,
                image: 'https://images.reverb.com/image/upload/s--qvt8vjWO--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1460667843/mgmemxmfyxwi4cixlvlo.jpg'
              }
            ]
    })