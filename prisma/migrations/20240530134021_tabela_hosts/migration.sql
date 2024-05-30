-- CreateTable
CREATE TABLE "hosts" (
    "id" TEXT NOT NULL,
    "host" TEXT NOT NULL,
    "processor" TEXT NOT NULL,
    "ram_memory" TEXT NOT NULL,
    "hdd" BOOLEAN,
    "sdd" BOOLEAN,
    "storage" TEXT NOT NULL,
    "system" TEXT NOT NULL,
    "switch" TEXT,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "hosts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "hosts" ADD CONSTRAINT "hosts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
