import db from '../../config/database';
class LivroDao {
  constructor() {
    this._db = db;

  }

  lista(callback) {
    this._db.all(
      'SELECT * FROM livros',
      (erro, resultados) => {
        callback(erro, resultados);
      }
    )
  }
}

export default LivroDao;