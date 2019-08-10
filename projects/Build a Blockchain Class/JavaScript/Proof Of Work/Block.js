import SHA256 from "crypto-js/sha256";

class Block {
    constructor(data) {
        this.data = data;
        this.hash = this.toHash();
    }

    toHash() {
        return SHA256(this.data + this.previousHash);
    }
}

export default Block;
