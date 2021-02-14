import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number | null = null;

  @Column({ type: 'varchar', length: 1024 })
  title: string | null = null;

  @Column('text')
  contents: string | null = null;

  @Column('datetime')
  createAt: Date | null = null;

  @Column({ type: 'datetime', nullable: true })
  updateAt: Date | null = null;

  @Column({ type: 'varchar', length: 100, nullable: true })
  subject: string | null = null;

  @Column({ type: 'boolean', default: false })
  deleted = false;

  @Column({ type: 'datetime', nullable: true })
  deletedAt: Date | null = null;

}