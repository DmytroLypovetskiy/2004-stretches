const { BookReview } = require('./bookReview');

describe('bookReview', () => {
  test('It takes a title and author as arguments', () => {
    const odysseyReview = new BookReview('The Odyssey', 'Homer');

    expect(odysseyReview.title).toEqual('The Odyssey');
    expect(odysseyReview.author).toEqual('Homer');
  });
  test('It has a method for adding/editing notes for particular pages.', () => {
    const gatsbyReview = new BookReview(
      'The Great Gatsby',
      'F. Scott Fitzgerald'
    );
    const foreshadowNote = 'Foreshadowing of disappearance?';
    gatsbyReview.addNotes(15, foreshadowNote);

    expect(gatsbyReview.notes[15]).toEqual(foreshadowNote);

    const newNote =
      "This was definitely forshadowing of the main character's demise.";
    gatsbyReview.addNotes(15, newNote);
    expect(gatsbyReview.notes[15]).not.toEqual(foreshadowNote);

    expect(gatsbyReview.notes[15]).toEqual(`${foreshadowNote} ${newNote}`);
  });
  test('It has a method for adding a rating out of five', () => {
    const cloudAtlasReview = new BookReview('Cloud Atlas', 'David Mitchell');

    expect(() => cloudAtlasReview.addRating(10)).toThrow();

    cloudAtlasReview.addRating(4.5);
    expect(cloudAtlasReview.rating).toEqual(4.5);
  });
});
