class AppController {
  /**
   * Handles the request for the homepage.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;
