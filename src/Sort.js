import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  // do cool stuff here

  let swapped = false;

  do {
    swapped = false;
    for (let i = 0; i < nums.length; i++) {
      snapshot(nums);
      if (nums[i] > nums[i + 1]) {
        const temps = nums[i + 1];
        nums[i + 1] = nums[i];
        nums[i] = temps;
        swapped = true;
      }
    }
  } while (swapped);
  snapshot(nums);

  // return nums;
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  done();
  return <App />;
}
