import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Dto } from "src/lib/dto/Dto";
import { PostDto } from "./post.dto";

export class CommentDto extends Dto<CommentDto> {
    @ApiProperty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsNumber()
    postId: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    content: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    createAt: string;
}