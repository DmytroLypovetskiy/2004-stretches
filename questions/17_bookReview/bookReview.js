class BookReview {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.notes = [];
    this.rating = null;
  }
  addNotes(pageNum, note) {
    if (this.notes[pageNum] === undefined) {
      this.notes[pageNum] = note;
    } else {
      this.notes[pageNum] += ` ${note}`;
    }

  }
  addRating(rating) {
    if (rating < 1 || rating > 5) throw new Error('wrong rating');
    this.rating = rating;
  }
}
module.exports = {
  BookReview
};