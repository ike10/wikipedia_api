const axios = require('axios');
const { getShortDescription } = require('../controllers/shortdescription');

jest.mock('axios');

describe('Short Description Controller', () => {
  describe('getShortDescription', () => {
    it('should return the short description for a valid name', async () => {
      // Mocking the response from the API
      const name = 'Yoshua_Bengio';
      const content = '{{Short description|Canadian computer scientist}}';
      const response = { data: { query: { pages: [{ revisions: [{ content }] }] } } };
      axios.get.mockResolvedValue(response);

      // Expected result
      const expected = { shortDescription: 'Canadian computer scientist' };

      // Test request and response objects
      const req = { query: { name } };
      const res = { json: jest.fn() };

      // Invoke the controller function
      await getShortDescription(req, res);

      // Check the response
      expect(res.json).toHaveBeenCalledWith(expected);
    });

    it('should return an error message for an invalid name', async () => {
      // Mocking the response from the API
      const name = 'Invalid_Name';
      const response = { data: { query: { pages: [{ revisions: [{ content: '' }] }] } } };
      axios.get.mockResolvedValue(response);

      // Expected result
      const expected = { message: 'Short description not found' };

      // Test request and response objects
      const req = { query: { name } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      // Invoke the controller function
      await getShortDescription(req, res);

      // Check the response
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith(expected);
    });

    it('should return a server error message for an error in the API', async () => {
      // Mocking the response from the API
      const name = 'Yoshua_Bengio';
      const error = new Error('Internal server error');
      axios.get.mockRejectedValue(error);

      // Expected result
      const expected = { message: 'Internal server error' };

      // Test request and response objects
      const req = { query: { name } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      // Invoke the controller function
      await getShortDescription(req, res);

      // Check the response
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith(expected);
    });
  });
});
