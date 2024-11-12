---
title: Every hero has an origin story
author: Lorenzo Piarulli, Simone Palmieri
date: 04 November 2024
description: "Three computer science students attended a summer school in Trento to explore HPC topics in depth. Throughout the conference week, they shared a house, meals, and experiences, fostering a strong sense of community. Inspired by their passion for collaboration, they decided to form a group to create a small cluster for their experiments. After the conference, these three students began working together to build a team that shared their vision and love for research and social interaction. Others from diverse backgrounds and specialties joined them, united by a single goal: to create an open cluster built and managed by anyone who wants to contribute."
image: https://i.imgur.com/ttIxpCA.jpeg
---

# Every hero has an origin story

## Once upon a time...
Three computer science students attended a [summer school in Trento](https://hpc-summer-school-24.disi.unitn.it/) to explore HPC topics in depth. Throughout the conference week, they shared a house, meals, and experiences, fostering a strong sense of community. Inspired by their passion for collaboration, they decided to form a group to create a small cluster for their experiments. After the conference, these three students began working together to build a team that shared their vision and love for research and social interaction. Others from diverse backgrounds and specialties joined them, united by a single goal: to create an open cluster built and managed by anyone who wants to contribute.

## The challenge
Piece by piece, raspberry by raspberry, the cluster began to take shape. The goal was to create a system that required minimal maintenance from scratch. They were (and still are, except for Ernesto) not initially equipped to build the system, so they learned along the way using a trial-and-error approach.

## The mission
This same trial and error is what students confronting this field often feel like not being able to ever touch. Having to build one's own mini-cluster can still be daunting, and having a handy remote access to [HP Frontier's 600k CPU cores](https://www.hpe.com/us/en/compute/hpc/cray/oak-ridge-national-laboratory.html) may be an even bigger challenge. That's our mission: giving everyone who wants to experience HPC in first person and experiment a bit with parallel computing a cheap and accessible remote lab.

<div align=center>
    <img src="https://i.imgur.com/rX4ipCW.jpeg" style="width:60vw"></img><br>
    <em style="font-size:small;">The guy she told you not to worry about</em>
</div>

## The rise
Using Linux, [SLURM](https://slurm.schedmd.com/documentation.html) and a lot of Ernesto's sweat, we were able to build and setup a first, minimal instance of the PlumJuice cluster, a collection of Raspberry Pi 5's ready to offer their computing time to curious students that are willing to support this small but ambitious project. It will be thanks to these students and their support that the project may, one day, become even more juicy.

<div align=center>
    <img src="https://i.imgur.com/ttIxpCA.jpeg" style="width:80vw"></img><br>
    <em style="font-size:small;">The results of Ernesto's sweat and blood</em>
</div>

## Epilogue
Sharing is caring, and we're now ready to share the up-and-running PlumJuice cluster with whoever wants to have a sip of it. Our future goals are to organize events with other students and researchers, and to expand the horizon of HPC to new and accessible territories. Please run your optimized distributed parallel algorithms on the cluster, our raspberries will thank you.

::credits{:authors= '[{"name": "Simone Palmieri", "github_nickname": "sudo-err"}, {"name": "Lorenzo Piarulli", "github_nickname": "lor3ny"}]'}
::