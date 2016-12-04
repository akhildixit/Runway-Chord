# Runway-Chord
Chord is a protocol for efficient look-up in a peer-to-peer network originally proposed in <a href="https://pdos.csail.mit.edu/papers/chord:sigcomm01/chord_sigcomm.pdf">this paper</a>. It is essentially a distributed hash table.
<a href="https://medium.com/salesforce-open-source/runway-intro-dc0d9578e248#.55bqejy2y">Runway</a> is a tool for designing distributed systems. See runway live <a href="https://runway.systems/">here</a>.

This repository contains a system model (written in Runway Specification Language) of the original version of Chord protocol. It is accompanied with a view file (written in JavaScript) for interactive animated simultions.
It can be run in <a href="https://github.com/salesforce/runway-browser">Runway browser</a>.

To run this model, follow instructions given to set up Runway web interface on your local machine. <a href="https://github.com/salesforce/runway-browser">Read here</a>.
Copy files from this repository to a directory named <code>Chord</code>. Move Chord directory inside <code>runway-browser/dist/models/</code>.
Set up web server as given in the runway-browser's instructions.
Access <a href="http://localhost:3030/?model=Chord">http://localhost:3030/?model=Chord<a> to see Chord running live.

Note:
This is an academic project for the <a href="https://github.com/palvaro/CMPS232-Fall16">CMPS232 course</a> and still under development. The system model may contain bugs.
