---
title: Test 002
author: Peppe 
date: 2022-12-01
---

# Lorem ipsum dolor sit amet

, consectetur adipiscing elit. Morbi eget dictum elit. Phasellus elementum lacinia consectetur. Fusce a ligula in arcu varius molestie ac vitae ipsum. Nulla diam nulla, fermentum eget mattis sed, mollis a felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur quis neque auctor, pulvinar velit vel, vestibulum augue. Integer dolor eros, mollis non turpis id, bibendum viverra dolor. Duis elementum nisi ac lorem tincidunt semper. In hac habitasse platea dictumst. Nulla bibendum eget tortor eu pretium. Quisque accumsan eleifend diam et auctor. Sed semper ut lacus id porta.

## Praesent volutpat 

```python
from multiprocessing import Process, cpu_count
import time

def count(num):
    while num > 0:
        num -= 1
        time.sleep(0.5)
        
def spawn(num_pro):
    processes = [Process(target = count, args=(1000,)) for i in range(num_pro)]
    for p in processes:
        p.start()
        print(f"Started Process: {p.pid}")
    for p in processes:
        p.join()
        print(f"Process {p.pid} has finished!")
        
def main():
    processors = cpu_count()
    print("Number of Processors: ",processors)
    processes = processors * 300
    print(f"Creating {processes} Processes")

    """
        Danger!! (an infinite loop)
    while True:
        spawn(processes)    
    """
    spawn(processes)

if __name__ == "__main__":
    main()
```

et sem in accumsan. Praesent pellentesque elit non est vulputate pellentesque. Mauris laoreet orci imperdiet, volutpat ligula et, lobortis nisi. Mauris eget tellus dui. Sed a viverra turpis, ut feugiat est. Pellentesque varius, nulla ac dapibus fringilla, sapien diam volutpat ex, ac iaculis neque justo quis ipsum. Nullam nec volutpat ligula. Donec nisi tortor, blandit et rhoncus bibendum, tempor at tortor. Etiam dapibus ullamcorper elementum. Ut efficitur vel lectus a molestie.

## Ut sed lobortis dui,


 non mattis neque. Aliquam vel nisi sodales, interdum lectus vitae, faucibus est. Nam in ullamcorper diam. Aenean sit amet posuere enim. Suspendisse viverra 
 
![img](https://cataas.com/cat )
 sapien quis urna aliquam rhoncus. Ut tincidunt lobortis nulla, in lobortis orci porttitor sit amet. 
 ## capitolo 2
 Sed sit amet leo sit amet nibh condimentum fermentum eget suscipit tortor. Nulla tempor purus a quam eleifend consectetur. Duis consequat non risus non aliquam. Donec varius arcu id sem convallis, in cursus sem aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
### asd
<--!more-->
Nunc imperdiet pulvinar nisl non rutrum. Curabitur at erat justo. Nunc dictum commodo nisi, sed mollis velit faucibus vitae. Vivamus ultricies posuere massa. Praesent id eros et risus gravida porta. Curabitur rhoncus neque justo. Etiam efficitur libero vitae mauris imperdiet, in porttitor urna rutrum.

Sed mattis quis erat id dapibus. Suspendisse felis purus, molestie porttitor magna vitae, feugiat pretium lorem. Nam sit amet justo neque. Phasellus luctus diam id viverra tempus. Quisque sagittis finibus risus, viverra facilisis justo scelerisque id. Quisque magna felis, cursus non viverra vitae, hendrerit eget metus. Suspendisse porttitor consectetur enim quis porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sit amet orci a nulla auctor tristique. Quisque sollicitudin, odio quis dictum malesuada, nunc ex convallis odio, bibendum interdum est tortor ac nibh. Maecenas tincidunt feugiat euismod. Proin nec erat sed neque ultricies porta eu non erat. Duis lorem ex, iaculis vitae vehicula nec, venenatis id neque. Sed vulputate neque a orci interdum, vitae condimentum est ultricies. Aliquam id malesuada felis.

::credits{:authors= '[{"name": "Miyamoto Musashi", "github_nickname": "CiZ01"}, {"name": "Kojiro Sasaki", "github_nickname": "plum-juice"}, {"name": "Soho Takuan", "github_nickname": "torvalds"}, {"name":"Yoshioka Seijuro", "github_nickname":"microsoft"}]' }
::