import { IsNotEmpty, IsString } from 'class-validator';
export class CreateSizeDto {
    @IsNotEmpty()
    @IsString()
    nameSize: string
}
