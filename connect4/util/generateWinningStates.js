const N_ROWS = 6;
const N_COLS = 7;
const SEQUENCE_LENGTH = 4;

const WINNING_STATES = [];

// horizontal
for (let i = 0; i < N_ROWS; i++) {
  for (let j = 0; j < N_COLS - SEQUENCE_LENGTH + 1; j++) {
    const this_state = [];
    for (let k = 0; k < SEQUENCE_LENGTH; k++) {
      this_state.push([i, j + k]);
    }
    WINNING_STATES.push(this_state);
  }
}

// vertical
for (let i = 0; i < N_ROWS - SEQUENCE_LENGTH + 1; i++) {
  for (let j = 0; j < N_COLS; j++) {
    const this_state = [];
    for (let k = 0; k < SEQUENCE_LENGTH; k++) {
      this_state.push([i + k, j]);
    }
    WINNING_STATES.push(this_state);
  }
}

// diagonal - main axis
for (let i = 0; i < N_ROWS - SEQUENCE_LENGTH + 1; i++) {
  for (let j = 0; j < N_COLS - SEQUENCE_LENGTH + 1; j++) {
    const this_state = [];
    for (let k = 0; k < SEQUENCE_LENGTH; k++) {
      this_state.push([i + k, j + k]);
    }
    WINNING_STATES.push(this_state);
  }
}

// diagonal - inverse axis
for (let i = N_ROWS - SEQUENCE_LENGTH + 1; i < N_ROWS; i++) {
  for (let j = 0; j < N_COLS - SEQUENCE_LENGTH + 1; j++) {
    const this_state = [];
    for (let k = 0; k < SEQUENCE_LENGTH; k++) {
      this_state.push([i - k, j + k]);
    }
    WINNING_STATES.push(this_state);
  }
}

console.log(WINNING_STATES);