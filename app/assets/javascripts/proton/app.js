$(document).foundation();

var proton;
var renderer;
var canvas;

Main();
function Main() {
    canvas = document.getElementById("logoflick");
    canvas.width = $('#logoflick').parent().width();
    canvas.height = 305;

    createProton(canvas);
    tick();
}

function createProton(canvas) {
    proton = new Proton;
    createColorEmitter(canvas);

    renderer = new Proton.Renderer('webgl', proton, canvas);
    renderer.blendFunc("SRC_ALPHA", "ONE");
    renderer.start();
}

function createColorEmitter(canvas) {
    var emitter = new Proton.Emitter();
    emitter.rate = new Proton.Rate(new Proton.Span(1, 5), 0.2);
    emitter.addInitialize(new Proton.Mass(1));
    emitter.addInitialize(new Proton.Radius(1.5, 8));
    emitter.addInitialize(new Proton.Life(1, 15));
    emitter.addInitialize(new Proton.V(new Proton.Span(0.2, 1), new Proton.Span(0, 360), 'polar'));
    emitter.addBehaviour(new Proton.Alpha(0.8, 0));
    emitter.addBehaviour(new Proton.Scale(0.25, 0.1));
    emitter.addBehaviour(new Proton.Color('#ff9c00', '#fddf2d'));
    emitter.addBehaviour(new Proton.CrossZone(new Proton.CircleZone(canvas.width / 2, canvas.height / 2, 350), 'dead'));
    emitter.p.x = canvas.width / 2;
    emitter.p.y = 160;
    emitter.emit();
    proton.addEmitter(emitter);
}

function tick() {
    requestAnimationFrame(tick);
    proton.update();
}

