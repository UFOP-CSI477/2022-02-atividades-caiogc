/*
  Warnings:

  - Added the required column `img` to the `eventos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_eventos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" DECIMAL NOT NULL,
    "data" DATETIME NOT NULL,
    "local" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "categoria_id" INTEGER NOT NULL,
    CONSTRAINT "eventos_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "categorias" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_eventos" ("categoria_id", "created_at", "data", "descricao", "id", "local", "nome", "preco", "updated_at") SELECT "categoria_id", "created_at", "data", "descricao", "id", "local", "nome", "preco", "updated_at" FROM "eventos";
DROP TABLE "eventos";
ALTER TABLE "new_eventos" RENAME TO "eventos";
CREATE UNIQUE INDEX "eventos_nome_key" ON "eventos"("nome");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
