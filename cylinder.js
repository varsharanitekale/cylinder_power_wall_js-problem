let obj={
    height:30,
    radius:20,
    volumeOfCylinder: function() {
        console.log(3.14*this.radius*this.radius* this.height);
    },
    surfaceAreaofCylinder: function () {
        console.log(2 * 3.14 * this.radius * this.height + 3.14 * this.radius * this.radius * this.height);
    }
}
obj.volumeOfCylinder();
obj.surfaceAreaofCylinder();

 