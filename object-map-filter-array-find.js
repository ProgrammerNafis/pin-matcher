const Students = [
    {id: 71, name: 'Fariyar Jmaia'},
    {id: 18, name: 'Marufar Jmaia'},
    {id: 21, name: 'samiyar Jmaia'},
    {id: 31, name: 'tunir Jmaia'},
    {id: 41, name: 'hamidar Jmaia'},
    {id: 51, name: 'sultanar Jmaia'},
    {id: 61, name: 'mahiyar Jmaia'},
]

const stname = Students.map(s => s.name);
console.log(stname);
const stId = Students.map(sId => sId.id);
console.log(stId);
const stFil = Students.filter(sF => sF.id > 31);
console.log(stFil);
const stFind = Students.find(sff => sff.id < 41);
console.log(stFind);
const findStudentNewId = Students.find(SFn => SFn.id < 61);
console.log(findStudentNewId);
const FindStudentBiggerId = Students.find(SfB => SfB.id > 18);
console.log(FindStudentBiggerId);

// console.log(Students)