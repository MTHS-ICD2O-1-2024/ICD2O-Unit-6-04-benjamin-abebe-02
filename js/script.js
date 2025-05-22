// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html


"use strict"

window.onload = function () {
  // calculates the volume of a sphere

  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get("radius")
  console.log(radius)

  // process
  const volumeFormula = (4 / 3) * Math.PI * radius ** 3
  const volume = Math.round(volumeFormula * 100) / 100

  // display results
  document.getElementById("radius").innerHTML = "<p> Radius is: " + radius + " .</p>"
  document.getElementById("area").innerHTML = "<p> Volume is: " + volume + " cm³"
}