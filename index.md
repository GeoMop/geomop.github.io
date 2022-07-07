---
title: Overview
layout: home
---

# GeoMop

Toolbox for creation of stochastic and complex simulations in geoscience. 
The software consists of the docker image [`flow123d/geomop-gnu`](https://hub.docker.com/repository/docker/flow123d/geomop-gnu)
and the installation package for the graphical applications.

The docker image contains:

- [Flow123d](https://flow123d.github.io) simulator
- [BGEM](https://pypi.org/project/bgem) Python library for creation of complex geometries and computational meshes including the random fracture networks.
- [MLMC](https://pypi.org/project/mlmc) Python library implementing multilevel Monte-Carlo method and maximal entropy method for reconstruction of the density function.\
  It includes support for parallel collection of the samples and dynamical planning.
- [ViSiP](https://pypi.org/project/visip) graphical functional programming language for complex simulations based on Python (experimental).


The graphical aplication package contains:

 - **Layer Editor** - preparation of layered computational geometry from the GIS data
 - **Model Editor** - editor of the main Flow123d input file in YAML format
 - **Jobs Panel** - running and management of job on distributed computational resources


## Acknowledgement 
<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2; -webkit-column-rule: 1px dotted #e0e0e0; -moz-column-rule: 1px dotted #e0e0e0; column-rule: 1px dotted #e0e0e0;">
    <div style="display: inline-block;">
        <a href=https://www.tacr.cz>
            <img src="assets/logo_TACR_zakl_inv.png" alt="TAČR_logo" width="200"/>
        </a>
    </div>
    <div style="display: inline-block;">
        <par>
        Tento software byl vytvořen se státní podporou Technologické agentury 
        ČR v rámci Programu Epsilon 3. (projekt TH03010227)

        <par>  
        This software was created with support of Technoligical agency of Czech Republic within
        the Program Epsilon 3. (project no.  TH03010227) 
    </div>
</div>


