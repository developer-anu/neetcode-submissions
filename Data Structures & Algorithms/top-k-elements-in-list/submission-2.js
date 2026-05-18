class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(item) {
        this.heap.push(item);
        this.bubbleUp();
    }

    pop() {
        if (this.size() === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }

    bubbleUp() {
        let idx = this.size() - 1;
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent][1] <= this.heap[idx][1]) break;
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            idx = parent;
        }
    }

    bubbleDown() {
        let idx = 0;
        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let smallest = idx;

            if (left < this.size() && this.heap[left][1] < this.heap[smallest][1]) {
                smallest = left;
            }
            if (right < this.size() && this.heap[right][1] < this.heap[smallest][1]) {
                smallest = right;
            }
            if (smallest === idx) break;
            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
            idx = smallest;
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     * {1:1}
     * {2:3}
     * {3:3}
     */
    topKFrequent(nums, k) {
        let frequency = new Map();
        let res = [];
        for(let num of nums){
            frequency.set(num, (frequency.get(num) || 0) + 1);
        }
        let minHeap = new MinHeap();
        for(let [num, freq] of frequency){
            minHeap.push([num,freq]);
            if(minHeap.size() > k){
                minHeap.pop();
            }
        }
        while(minHeap.size()){
            res.push(minHeap.pop()[0]);
        }
        return res;
    }
}
