class BPTree {
    static maxDegree;
    #right;
    #leaf;
    #val;

    constructor(val, right, leaf) {
        this.#val = val;
        this.#right = right;
        this.#leaf = leaf;
    }


    get val() {
        return this.#val;
    }
    set val(val) {
        this.#val = val;
    }

    get right() {
        return this.#right;
    }
    set right(right) {
        this.#right = right;
    }

    get leaf() {
        return this.#leaf;
    }
    set leaf(leaf) {
        this.#leaf = leaf;
    }

}