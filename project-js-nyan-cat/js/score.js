class Score {
    constructor(root){
        this.score = PLAYER_SCORE;

        this.domElement = document.createElement('p');
        this.domElement.style.position = 'absolute';
        this.domElement.style.left = `300px`;
        this.domElement.style.top = `0px`;
        this.domElement.style.zIndex = '20';
        this.domElement.style.color = 'red';
        this.domElement.innerText = `Score: ${this.score}`;
        root.appendChild(this.domElement);
    }

    scoreUp(score) {
        this.score += score
        this.domElement.innerText = `Score: ${this.score}`;
    }
}
