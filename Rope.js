class Rope {
  constructor(body1, pointB) {
    var option = {
      bodyA: body1,
      pointB: pointB,
      length: 250,
      stiffness: 1.2,
    };
    this.rope = Constraint.create(option);
    World.add(world, this.rope);

    this.pointB = pointB;
  }
  display() {
    if (this.rope.bodyA) {
      var pointA = this.rope.bodyA.position;
      var pointB = this.pointB;

      strokeWeight(5);
      stroke("brown");
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
  attach(body) {
    this.rope.bodyA = body;
  }
  fly() {
    this.rope.bodyA = null;
  }
}
