const axios = require('axios');

exports.getShortDescription = async (req, res) => {
  // console.log('endpoint hit')
 try {
    const name = req.query.name;
    const response = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=${name}&rvlimit=1&formatversion=2&format=json&rvprop=content`);
    const content = response.data.query.pages[0].revisions[0].content;
    const regex = /\{\{Short description\|(.+?)\}\}/;
    const match = content.match(regex);
    if (match) {
      const shortDescription = match[1];
      res.json({ shortDescription });
    } else {
      res.status(404).json({ message: 'Short description not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
