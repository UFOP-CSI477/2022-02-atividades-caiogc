-- CreateTable
CREATE TABLE "categorias" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "eventos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" DECIMAL NOT NULL,
    "data" DATETIME NOT NULL,
    "local" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "categoria_id" INTEGER NOT NULL,
    CONSTRAINT "eventos_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "categorias" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "eventos_nome_key" ON "eventos"("nome");
