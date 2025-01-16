// Returns a random DNA base
console.log('NEW TEST');

const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

let testArray = mockUpStrand();
// console.log(testArray);

function pAequorFactory(num, dnaArray) {
  return {
    specimenNum: num,
    dna: dnaArray,
    mutate() {
      let mutateBaseIndex = Math.floor(Math.random()*this.dna.length);
      // console.log(`This is the mutateBaseIndex: ${mutateBaseIndex}.`);
      // console.log(`This is the base before mutation: ${dnaArray[mutateBaseIndex]}.`) 
      let newMutatedBase = returnRandBase();
      // console.log(`This is the randomly selected base to mutate to: ${newMutatedBase}.`) 
      if (dnaArray[mutateBaseIndex] === newMutatedBase) {
        do {
          newMutatedBase = returnRandBase();
          // console.log(`The bases matched, so this is the new randomly selected base to mutate to: ${newMutatedBase}.`) 
        } while (dnaArray[mutateBaseIndex] === newMutatedBase)
      } 
      dnaArray[mutateBaseIndex] = newMutatedBase;
      // console.log(`This is the base after mutation: ${dnaArray[mutateBaseIndex]}.`)
      return this._dna;
    },
    compareDNA(pAequor) {
      let dnaAmount = this.dna.length;
      let sameCount = 0;
      for (i = 0; i < dnaArray.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          sameCount++;
        }
      }
      let samePercentage = (sameCount/dnaAmount) * 100;
      console.log(`Specimen ${this.specimenNum} and Specimen ${pAequor.specimenNum} have ${samePercentage}% DNA in common.`)
    },
    willLikelySurvive() {
      let cAndGCount = 0;
      for(i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          cAndGCount++;  
        }
      }
      let survivePercentage = cAndGCount / this.dna.length;
      if (survivePercentage >= 0.6) {
        return true;
      } else {
        return false;
      }
    }
  }
}

const createPAequor = () => {
  let arrayOfPAequor = [];
  for (i = 1; i < 31; i++) {
    arrayOfPAequor.push(pAequorFactory(i, mockUpStrand()));
  }
  return arrayOfPAequor;
}

console.log(createPAequor());

// const ex1 = pAequorFactory(1, ['T', 'T', 'G', 'G']);
// const ex2 = pAequorFactory(2, ['G', 'C', 'T', 'C']);

// console.log(ex1.willLikelySurvive());

// ex1.compareDNA(ex2);

// pAequorFactory(1, testArray).mutate();

// console.log(testArray);