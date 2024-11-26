-- CreateTable
CREATE TABLE "Entreprise" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "address" TEXT,
    "phone" TEXT,
    "siret" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Entreprise_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Entreprise_companyName_key" ON "Entreprise"("companyName");
