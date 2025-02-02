const prisoners = [
    {
      'id' : 1,
      name: "William",
      age: 25,
      crime: "Frustrated murder",
      sentence: "25 years",
    },
  
    {
      'id' : 2,
      name: "Alexa",
      age: 23,
      crime: "Illegal possesion of drugs and firearms",
      sentence: "50 years",
    },
  
    {
      'id' : 3,
      name: "Hannah",
      age: 22,
      crime: "Adultery and arson",
      sentence: "10 years",
    },
  ]
  
  module.exports.prisoners = (req, res) => {
  
      res.json({'PRISONERS': prisoners});
  
  };
  
  // search a prisoners by id using /prisoner/{id}
  // method name must be prisoner
  
  module.exports.prisoner = (req, res) => {
    const {id} = req.params
  
    console.log(id)
  
    const matchingPrisoner = prisoners.filter(
      (prisoner) => prisoner.id === parseInt(id)
    )
  
    if (matchingPrisoner.length === 0){
      res.status(404).json({'error' : `Prisoner with $ {id} not found`})
    }
  
    else{
      res.status(200).json({'prisoner' : matchingPrisoner[0]})
    }
  }
  // simple query paramenter using name as key
  // using req.query
  // route: /greet/person/name=value
  // http://localhost:4000/p/greet/person?name=test
  module.exports.greet = (req, res) => {
    const { name } = req.query
    console.log(name)
    res.status(200).json({'HELLO': name})
  }
  
  // using multiple queries
  // /search/prisoner?key1=value1&key2=value2
  // e.g /search/prisoner?id=1&name=Give
  // //http://localhost:4000/p/search/prisoner?id=1&name=Given
  
  module.exports.searchPrisoner = (req, res) => {
  
    const { id, name } = req.query
    console.log(id,name)
  
    const matchingPrisoner = prisoners.filter(
      (p) => p.id === parseInt(id) && p.name === name
    )
  
    if (matchingPrisoner.length === 0) {
      res.status(404).json({'error': `prisoner with ${id} and ${name} not found`})
    }
  
    else {
      res.status(200).json({'found': matchingPrisoner[0]})
  
    }
  
  }
  //http://localhost:4000/p/search/prisoner?id=1&name=Alexa
  