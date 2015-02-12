{
    init: function(elevators, floors) {
        var elevator = elevators[0];
        elevator.on("idle", function() {
            elevator.goToFloor(floorNum);
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
