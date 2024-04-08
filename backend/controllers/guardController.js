const guards = [
    {
      'id' : 1,
      name: "William",
      rank: "officer",
      years: 15,
      isActive: true,
    },
  
    {
      'id' : 2,
      name: "Alexa",
      rank: "officer",
      years: 10,
      isActive: true,
    },
  
    {
      'id' : 3,
      name: "Hannah",
      rank: "officer",
      years: 5,
      isActive: true,
    },
  ]
  
  module.exports.guards = (req, res) => {
  
      res.json({'GUARDS': guards});
  
  };
  

  module.exports.guard = (req, res) => {
    const {id} = req.params
  
    console.log(id)
  
    const matchingGuard = guards.filter(
      (guard) => guard.id === parseInt(id)
    )
  
    if (matchingGuard.length === 0){
      res.status(404).json({'error' : `Guard with $ {id} not found`})
    }
  
    else{
      res.status(200).json({'guard' : matchingGuard[0]})
    }
  }

//   module.exports.searchGuard = (req, res) => {

//     const { id, rank, years } = req.query
//     console.log(id,rank,years)
  
//     const matchingGuard = guards.filter(
//       (p) => p.id === parseInt(id) && p.rank === rank && p.years === parseInt(years)
//     )
  
//     if (matchingGuard.length === 0) {
//       res.status(404).json({'error': `guard with ${id} and ${rank} and ${years} not found`})
//     }
  
//     else {
//       res.status(200).json({'found': matchingGuard[0]})
  
//     }
  
//   }



// module.exports.searchGuard = (req, res) => {
//     const { id, rank, years } = req.query;
//     console.log(id, rank, years);
  
//     const matchingGuard = guards.find(
//       (guard) => guard.id === parseInt(id) && guard.rank === rank && guard.years === parseInt(years)
//     );
  
//     if (!matchingGuard) {
//       res.status(404).json({ 'error': `Guard with id ${id}, rank ${rank}, and ${years} years of experience not found.` });
//     } else {
//       res.status(200).json({ 'found': matchingGuard });
//     }
//   };

module.exports.searchGuard = (req, res) => {
    const { id, rank, years } = req.query;
    console.log(id, rank, years);
  
    const matchingGuard = guards.find(
      (guard) => guard.id === parseInt(id) && guard.rank === rank && guard.years === parseInt(years)
    );
  
    if (!matchingGuard) {
      res.status(404).json({ 'error': `Guard with id ${id}, rank ${rank}, and ${years} years of experience not found.` });
    } else {
      // Constructing a response object with only id, rank, and years
      const response = {
        id: matchingGuard.id,
        rank: matchingGuard.rank,
        years: matchingGuard.years
      };
      res.status(200).json({ 'found': response });
    }
  };
  
  

  module.exports.deleteGuard = (req, res) => {
    const { id } = req.params;

    const index = guards.findIndex(guard => guard.id === parseInt(id));

    if (index === -1) {
        res.status(404).json({ 'error': `Guard with id ${id} not found` });
    } else {
        // Remove the guard from the guards array
        guards.splice(index, 1);
        res.status(200).json({ 'message': `Guard with id ${id} deleted successfully` });
    }
};