-- CreateTable
CREATE TABLE "Poligono" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "zone" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Poligono_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coordenada" (
    "id" SERIAL NOT NULL,
    "lat" DECIMAL(65,30) NOT NULL,
    "lon" DECIMAL(65,30) NOT NULL,
    "poligonoId" INTEGER NOT NULL,

    CONSTRAINT "Coordenada_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Poligono_name_key" ON "Poligono"("name");

-- AddForeignKey
ALTER TABLE "Coordenada" ADD CONSTRAINT "Coordenada_poligonoId_fkey" FOREIGN KEY ("poligonoId") REFERENCES "Poligono"("id") ON DELETE CASCADE ON UPDATE CASCADE;
