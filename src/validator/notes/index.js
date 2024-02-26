const InvariantError = require('../../exceptions/InvariantError');
const { NotePayloadSchema } = require('./schema');

const NotesValidator = {
  validateNotePayload: (payload) => {
    const ValidationResult = NotePayloadSchema.validate(payload);
    if (ValidationResult.error) {
      throw new InvariantError(ValidationResult.error.message);
    }
  },
};

module.exports = NotesValidator;
