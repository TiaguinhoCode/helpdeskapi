-- CreateTable
CREATE TABLE "Ticket" (
    "id" TEXT NOT NULL,
    "problem_description" TEXT NOT NULL,
    "photo_problem" TEXT NOT NULL,
    "oppening_date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "service_date" TIMESTAMP(3),
    "closing_date" TIMESTAMP(3),
    "user_id" TEXT NOT NULL,
    "status_id" TEXT NOT NULL,
    "priority_id" TEXT NOT NULL,
    "host_id" TEXT NOT NULL,
    "technician" TEXT NOT NULL,
    "resolution_id" TEXT NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Status" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Priority" (
    "id" TEXT NOT NULL,
    "priority_level" TEXT NOT NULL,

    CONSTRAINT "Priority_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resolution" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "resolution_photo" TEXT NOT NULL,

    CONSTRAINT "Resolution_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_host_id_fkey" FOREIGN KEY ("host_id") REFERENCES "hosts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_priority_id_fkey" FOREIGN KEY ("priority_id") REFERENCES "Priority"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_resolution_id_fkey" FOREIGN KEY ("resolution_id") REFERENCES "Resolution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
