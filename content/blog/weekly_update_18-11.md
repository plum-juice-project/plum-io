---
title: 'Weekly Update 18-11'
author: 'Alessio Olivieri'
gh_nickname: 'Alessio-Olivieri'
description: 'The week began with the cluster seemingly ready, but issues emerged during testing with MPI and SLURM. Specifically'
date: 2024-11-18
image: https://res.cloudinary.com/dllutk9zl/image/upload/v1732001407/geppetto_muhtxu.jpg
---


# Weekly Update 18-11
# Cluster Troubleshooting and meetings

## Cluster Issues with MPI and SLURM

The week began with the cluster almost in a ready state, but issues emerged during testing with MPI and SLURM. Specifically:
- **SLURM (`srun`)**: Only ran in singleton mode without errors but failed to scale.
- **MPI (`mpirun`)**: Crashed outright, returning an error: "PSEC: munge failed to create credential: Socket communication error."

The issue was **Munge**, a tool SLURM uses for authentication across nodes. Although all nodes had it installed and shared the same `munge.key`, `mpirun` continued to fail.

### Solution Attempts and Breakthrough

After trying several fixes, we found a relevant article by **Hossein Ghorbanfekr** on Medium, which detailed a similar setup using Raspberry Pi 4 with a Pi 3 as master: he compiled SLURM, and MPI from scratch and his setup was working, however the same authentication issue persisted.

Later, a deeper research persisted by Ernesto revealed an Intel cluster user’s solution:
- By setting `PMIX_MCA_psec0=native`, MPI bypassed Munge and used its default authentication. This change allowed MPI to communicate properly across nodes without the Munge authentication layer.

Testing this:
- **`PMIX_MCA_psec0=munge`** with `srun -n 16 hostname` worked.
- **`mpirun`** still faced issues, which we plan to address when we have more time, as the current priority is communication stability.

## Hardware Upgrade

We decided to include the previous master **Ciz0** (The only node with 8GB of RAM) in the computational nodes and passed the role of the master to **Andrea**, a Raspberry Pi 3b with 1 GB of RAM, enhancing the cluster specs:
- **28GB -> 36 GB of RAM**
- **28->32 cores**

### Potential Problems of this approach
**Ciz0** still handles the filesystem... This might be a potential bottleneck when the multiple users try to use the server at the same time since it has more tasks to do.

The problem will be solved when the filesystem will be handled by the master, which will happen when we get more raspberries

##### Saverio is now satisfied that his previously underutilized hardware was put to work! 

### Next Steps

Using munge for the authentication will be scheduled for later, as we prioritize cluster stability for the presentation of the 13/11/24 (which has been rescheduled for the 20/11/24)

## Plum juice cluster presentation in the multicore class
### Make the world know about us.
Professor De Sensi gave us 15 minutes of it's multicore classto present our cluster to the students. This is a big opportunity to expand the plum juice team and to make the world know about us!
### What's the multicore course about?
The multicore course has been tought to give a deep understanding and practical experience about parallel programming. This is done by proposing the students homeworks where they have to implement classic parallelizable problems like *matrix multiplication*, *histograms computation* and *integral approximation*. The taught libraries are: *MPI, OpenMP, Pthreads* and *Cuda*. 
### What do we offer?
The Plum juice team offers to give students the possibility to easily test their applications on a truly multi node system, effectively simulating more expensive clusters like Leonardo.  
### Our expectations.
Every plum has their own expectactions from this presentation:
- **Ciz:** We're dumb
- **Saverio:** I expect money
- **Lachi:** ehhh booh... nobody will be interested
### Where and when can you find us:
Aula A1, Via del Castro Laurenziano at 13:00.

## Behind the scenes, when nothing was still working
> **Ciz**: Ok, now Slurm is starting!  
> 
> **Ciz**: Oh no, just kidding... it can't find the node name. Perfect, we're off to a great start.  
> 
> **Ciz**: Guys, the configuration file is full of errors... honestly, it's embarrassing.
> 
> **Saverio**: Umm... maybe because you're running it from the master? Just a thought.  
> 
> **Ciz**: Why doesn't poor ciz0 have Slurm installed? This is discrimination!  
> 
> **Ciz**: Fine, I just need to add it to the playbook, right?  
> 
> **Ciz**: Wait, so it's not installed at all. Great. 
>
> **Ernesto**: Actually, if there's no Munge, Slurm won't even acknowledge you. It's like an honor code.  
>
> **Ciz**: Ok, summary: changed the master password, removed TaskAffinity from the config because it was throwing errors anyway. Don't ask me why it's in the docs, but it doesn't work.  
> 
> **Ciz**: Then, added the node name, and now Slurmd is running on all nodes! 🎉  
> 
> **Ciz**: Oh, but Slurmctld won't start because it can't create /var/spool/slurmctld. Of course, it doesn't have permissions... nothing works, help me.  
> ##### ... The discussion reached the point where we were considering a full reset ...
> #### In the meanwhile Saverio had news that nobody asked for
> **Saverio**: How cool is the rack?
> 
> <figure class="not-centerd">
>   <img src="https://res.cloudinary.com/dllutk9zl/image/upload/v1732001405/whatsapp1_sqoiwe.jpg" alt="">
></figure>   
>
>  #### In the middle of desperation, the only friendly answer to Saverio was Simone's:
> **Simone**: Current situation: Ciz and Ernesto desperate between Wi-Fi and Slurm.
> 
> **Simone**: Meanwhile, Saverio in tech support mode:  
> 
> <figure class="not-centerd">
>    <img src="https://res.cloudinary.com/dllutk9zl/image/upload/v1732001407/geppetto_muhtxu.jpg" alt="">
></figure>  
>
> <text class="centered">
> 
>#### Saverio, officially crowned MVP of confusion.  
></text>

## Our stickers reach Vienna
<figure>
    <img src="https://res.cloudinary.com/dllutk9zl/image/upload/v1731934454/Vienna_bq6vtc.jpg" alt="">
    <figcaption>our plum juice stickers have officially reached Vienna! 🎉 A huge shoutout to Saverio for making it happen</figcaption>
</figure>

## A Plum at the SC24
This week Lorenzo attended **SC24**, the world's biggest HPC conference! (what a lucky plum he is...)
It has been a tremendous experience and... **OH WAIT**, cannot disclose it now, he will write about it!

So, if you want to know what SC24 was about, stay tuned guys
<figure>
    <img src="https://res.cloudinary.com/dllutk9zl/image/upload/v1732270953/Plum_at_SC24_eozc8d.jpg" alt="">
    <figcaption>Lorenzo at the International Conference for High Performance Computing, Networking, Storage, and Analysis</figcaption>
</figure>



::credits{:authors= '[{"name": "Alessio Olivieri", "github_nickname": "Alessio-Olivieri"}]'}
::

<style>
p {
  text-indent: -1em;
  padding-left: 1em;
}
<\style>