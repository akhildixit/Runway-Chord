/*
 * Copyright (c) 2016-2017, Akhil Dixit.
 * All rights reserved.
 * Licensed under the MIT license.
 * For full license text, read https://opensource.org/licenses/MIT
 */
'use strict';

let d3 = require('d3');
var bigRadius = 30;
var smallRadius = 3;
var arrX = [];
var arrY = [];
var xOffset = 50;
var yOffset = 50;

let View = function(controller, svg, module) {
    let model = module.env;
    svg = d3.select(svg)
        .append('g');
    let circles = [];
    let labels = [];
    let bigCircle;
    let m = model.vars.get('m');
    let angle = 360.0 / Math.pow(2, m);
    for (var i = 0; i < Math.pow(2, m); i++) {
        arrX[i] = bigRadius * Math.sin(i * angle * Math.PI / 180);
        arrY[i] = -bigRadius * Math.cos(i * angle * Math.PI / 180);
    }
    bigCircle = svg.append('circle').attr({
        'cx': xOffset,
        'cy': yOffset,
        'r': bigRadius,
        'fill': 'white',
        'stroke': 'gray',
        'stroke-width': 0.5
    });
    for (var i = 0; i < Math.pow(2, m); i++) {
        circles[i] = svg.append('circle').attr({
            'cx': arrX[i] + xOffset,
            'cy': arrY[i] + yOffset,
            'r': smallRadius,
            'fill': 'white',
            'stroke': 'gray',
            'stroke-width': 0.5
        });

        labels[i] = svg.append('text')
            .attr({
                'x': arrX[i] + xOffset - smallRadius/2 + 0.4,
                'y': arrY[i] + yOffset + smallRadius/2,
				'font-size': 4,
				'text-align':'center'
            });
			
		labels[i].text(i);
    }
    return {
        name: 'CounterView',
        update: function(changes) {
            model.vars.get('ring').forEach((r, id) => {
                let key = `node-${id}`;
                r.match({
                    Absent: () => {
                        circles[id].attr('fill', 'white');
                    },
                    Present: rfs => {
                        circles[id].attr('fill', 'green');
                    },
                })
            });
        },
    };
}; // View

module.exports = View;