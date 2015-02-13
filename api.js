Elevator:
  arrays:
    destinationQueue
  events:
    idle
    floor_button_pressed
    passing_floor
    stopped_at_floor
  functions:
    goToFloor
    stop
    currentFloor
    goingUpIndicator
    goingDownIndicator
    maxPassengerCount
    loadFactor
    checkDestinationQueue
    getPressedFloors
Floor:
  Events:
    up_button_pressed
    down_button_pressed
  Properties:
    floorNum