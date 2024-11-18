---
title: 'Weekly Update 11-11'
author: 'Alessio Olivieri'
gh_nickname: 'Alessio-Olivieri'
description: 'The week began with the cluster seemingly ready, but issues emerged during testing with MPI and SLURM. Specifically'
date: 2024-11-18
---


# Weekly Update - Ernesto Juice Cluster Troubleshooting and Progress

## Cluster Issues with MPI and SLURM

The week began with the cluster seemingly ready, but issues emerged during testing with MPI and SLURM. Specifically:
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

## Big steps! Plum juice cluster presentation in the multicore class
We will present the cluster during the multicore course of professor De Sensi, each of the members has different expectations from this presentation:
- **Saverio:** I expect money
- **Ciz:** We're dumb
- **Lachi:** ehhh booh... nobody will be interested
- **Alessio:** Some people will be interested

### Tests for the presentation
Saverio wrote an n-body simulation that scales almost linearly when the nodes utilized are on the same switch

## Behind the scenes
### Geppetto
> **Ciz**: Ok, now Slurm is starting!  
> 
> **Ciz**: Oh no, just kidding... it can't find the node name. Perfect, we're off to a great start.  
> 
> **Ciz**: Guys, the configuration file is full of errors... honestly, it's embarrassing.
> 
>  **Saverio**: Umm... maybe because you're running it from the master? Just a thought.  
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
> ##### *...A bunch of technical data even the Wi-Fi can't comprehend... The discussion reached the point where we were considering a full reset * 
> **Saverio**: How cool is the rack?
> <figure class="not-centerd">
    <img src="https://res.cloudinary.com/dllutk9zl/image/upload/v1731934450/whatsapp1_gthkxh.jpg" alt="">
</figure>  
> <figure>
    <img src="https://res.cloudinary.com/dllutk9zl/image/upload/v1731934451/whatsapp2_dgibey.jpg" alt="">
    <figcaption>Completely out of context image of the rack</figcaption>
</figure>
> 
> **Simone**: Current situation: Ciz and Ernesto desperate between Wi-Fi and Slurm.
> 
> **Simone**: Meanwhile, Saverio in tech support mode:  
> 
> <figure class="not-centerd">
    <img src="https://res.cloudinary.com/dllutk9zl/image/upload/v1731934453/geppetto_onkzgq.jpg" alt="">
</figure>  
> 
#### Saverio, officially crowned MVP of confusion.  

### Our stickers reach Vienna
<figure>
    <img src="https://res.cloudinary.com/dllutk9zl/image/upload/v1731934454/Vienna_bq6vtc.jpg" alt="">
    <figcaption>our plum juice stickers have officially reached Vienna! 🎉 A huge shoutout to Saverio for making it happen</figcaption>
</figure>

<style>
p {
  text-indent: -1em;
  padding-left: 1em;
}
<\style>


::credits{:authors= '[{"name":"Alessio Olivieri","github_nickname":"Alessio-Olivieri"}]'}
::
dinary.com/dllutk9zl/image/upload/v1731934453/geppetto_onkzgq.jpg" alt="">
</figure>  
> 
#### Saverio, officially crowned MVP of confusion.  

### Our stickers reach Vienna
<figure>
    <img src="https://res.cloudinary.com/dllutk9zl/image/upload/v1731934454/Vienna_bq6vtc.jpg" alt="">
    <figcaption>our plum juice stickers have officially reached Vienna! 🎉 A huge shoutout to Saverio for making it happen</figcaption>
</figure>

<style>
p {
  text-indent: -1em;
  padding-left: 1em;
}
<\style>
