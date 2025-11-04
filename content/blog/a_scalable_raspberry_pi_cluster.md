---
title: 'A scalable Raspberry Pi cluster'
author: 'Francesco Fazzari'
gh_nickname: 'cizzoo'
description: "The cluster consists of eight Raspberry Pi 5 nodes:
Each node is a compute node with 4GB of RAM and a quad-core ARM processor.
Just one special node, with a special role, with a special personality, is a Raspberry Pi 5 with 8GB of RAM and a NVMe SSD mounted. This node is the storage node that provides a shared filesystem for the entire cluster and is used for managing other aspects of the cluster.
Each node is powered through Power over Ethernet (PoE) to reduce the need for individual power supplies and simplify the cabling structure. All nodes are connected via two PoE"
image: 'https://res.cloudinary.com/dllutk9zl/image/upload/v1731434779/img2_cfcjno.jpg'
date: 2024-11-11
---

## Introduction

In this article, we present our project: a compact, simple and scalable cluster, composed of a set of Raspberry Pi 5 connected via Power over Ethernet (PoE) switches. The cluster is designed to be affordable and easy to manage, making it an ideal platform for educational purposes and prototyping distributed applications.

## Why use Raspberry Pi for clustering?

Raspberry Pi boards offer two main advantages for building a cluster:

- **Affordability**: Raspberry Pi boards are budget-friendly, for this type of project, making them accessible for educational institutions, hobbyists, and small businesses.

- **Scalability**: Raspberry Pi clusters can be easily scaled by adding more nodes, allowing users to expand their computing power as needed or change the cluster configuration to suit different applications.

Beyond these advantages, using Raspberry Pis in a cluster opens up a lot of interesting possibilities for experimenting with ARM processors. This kind of project is perfect for getting hands-on experience with distributed computing. It’s a great way to dive into how small hardware can take on real computing tasks, and it lets us play around with ideas for optimizing performance.

## Hardware Setup

The cluster consists of **eight Raspberry Pi 5 nodes**:
Each node is a compute node with **4GB of RAM** and a **quad-core ARM processor**.
Just one special node, with a special role, with a special personality, is a **Raspberry Pi 5** with **8GB of RAM** and a **NVMe SSD** mounted. This node is the storage node that provides a shared filesystem for the entire cluster and is used for managing other aspects of the cluster.

<figure>
    <img src="https://res.cloudinary.com/dllutk9zl/image/upload/v1731434779/img2_cfcjno.jpg" alt="Raspberry Pi 5">
    <figcaption>Our Raspberry Pi 5, it is a plum</figcaption>
</figure>

Each node is powered through **Power over Ethernet (PoE)** this approch allow us to:
- **Reduce** the need for **individual power supplies** and **simplify the cabling structure**, this is an important aspect since each compute node requires 30W of power and a power supply that can provide enough power for a set of nodes is very expensive.
- Each node need a network connection, so we can **use the same cable for power and network connection**, ez 🧎‍♀️.


However the current topology is a temporary solution, we are working on improve some aspects of the network configuration, but we need money for this 💸.

<figure>
    <img src="https://res.cloudinary.com/dllutk9zl/image/upload/v1731434780/img1_ponf4t.jpg" alt="switch">
    <figcaption>One of our powerfull switch ⚡</figcaption>
</figure>

Last but not least, the cluster is managed by a very strong **Raspberry Pi 3B** acting as the master and login node. This node is responsible for coordinating tasks, managing the cluster and interacting with the compute nodes. For this kind of usage we have chosen a **Raspberry Pi 3B** because it should be enough for this kind of tasks.

## Software setup

Each node run **Raspberry Pi OS Lite 64 bits** , with **OpenMPI** for parallel computing tasks, currently no containerization technology is used, any tasks run in a bare metal environment.  
All this hardware need someone to manage them, we choose **SLURM** that is a free and open-source job scheduler, that can be used to manage and schedule the tasks on the cluster. It is a very powerful tool that allows us to manage the resources of the cluster in a very simple way using configuration files, however this is not the place where we can explain how we have configured it and other software that we use in the cluster, maybe in the future we will write an article about it.

An important aspect of the software setup is the support of th **Ansible configuration management tool**, that allows us to manage the configuration of the cluster in a very simple way, we can install software, update the system, and manage the configuration of the cluster with just a command and propagate the changes to all the nodes in the cluster. This is simple to use but it is a pain to configure, however it is worth it 💪.

## Conclusion
Our Raspberry Pi cluster is a flexible, powerful solution that shows how versatile Raspberry Pi boards can be for distributed computing tasks.  
While it’s not a substitute for large-scale server clusters, it’s a valuable platform for learning, prototyping, and testing distributed applications.

### Future Works
We’re planning to add new nodes to the cluster (but of course, there are never enough ports on switches 😭). We’re also considering adding new hardware to boost node computation, like **GPUs**, **TPUs**, and other accelerators. These upgrades would let us take on more complex tasks and experiment with hardware-accelerated processing, pushing our Pi cluster’s capabilities even further! 🚀.


::credits{:authors='[{"name":"Francesco Fazzari","github_nickname":"cizzoo"}]'}
::
