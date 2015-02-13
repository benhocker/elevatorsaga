{
    init: function(elevators, floors) {
        // Do stuff with the elevators and floors, which are both arrays of objects
        _.each(elevators, function (elevator) {
          // Triggered when the elevator has completed all its tasks and is not doing anything.
          elevator.on("idle", function(floorNum) {
              // The elevator is idle, so let's go to all the floors (or did we forget one?)
              elevator.goToFloor(0);
          });

          // Triggered when a passenger has pressed a button inside the elevator.
          elevator.on("floor_button_pressed", function(floorNum) {
            elevator.goToFloor(floorNum);
          });

          // Triggered slightly before the elevator will pass a floor. A good time to decide whether
          // to stop at that floor. Note that this event is not triggered for the destination floor.
          // Direction is either "up" or "down".
          elevator.on("passing_floor", function(floorNum, direction) {
            //if _.contains(elevator.getPressedFloors(), elevator.currentFloor()) {
            if (floorNum == Math.round(elevator.currentFloor())) {
              elevator.goToFloor(floorNum);
            }
          });

          // Triggered when the elevator has arrived at a floor.
          elevator.on("stopped_at_floor", function(floorNum) {

          });
        });
    },
    update: function(dt, elevators, floors) {
      /*
      // Do more stuff with the elevators and floors
      // dt is the number of game seconds that passed since the last time update was called
      _.each(elevators, function (elevator) {
        elevator.destinationQueue.sort();
      });
      */
    }
}
