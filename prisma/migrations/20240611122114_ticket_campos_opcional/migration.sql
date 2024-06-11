-- DropForeignKey
ALTER TABLE "ticket" DROP CONSTRAINT "ticket_priority_id_fkey";

-- DropForeignKey
ALTER TABLE "ticket" DROP CONSTRAINT "ticket_resolution_id_fkey";

-- AlterTable
ALTER TABLE "ticket" ALTER COLUMN "priority_id" DROP NOT NULL,
ALTER COLUMN "resolution_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_priority_id_fkey" FOREIGN KEY ("priority_id") REFERENCES "priority"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_resolution_id_fkey" FOREIGN KEY ("resolution_id") REFERENCES "resolution"("id") ON DELETE SET NULL ON UPDATE CASCADE;
