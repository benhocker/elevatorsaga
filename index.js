{
    init: function(elevators, floors) {
        // Do stuff with the elevators and floors, which are both arrays of objects
        var elevator = elevators[0]; // Let's use the first elevator

        elevator.on("idle", function() {
            // The elevator is idle, so let's go to all the floors (or did we forget one?)
            elevator.goToFloor(0);
        });
        elevator.on("floor_button_pressed", function(floorNum) {
          elevator.goToFloor(floorNum);
        });
    },
    update: function(dt, elevators, floors) {
      // Do more stuff with the elevators and floors
      // dt is the number of game seconds that passed since the last time update was called

    }
}
