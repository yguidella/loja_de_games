import { ProdutoService } from './../services/produto.service';
import { ParseIntPipe,  HttpCode, HttpStatus, Param } from '@nestjs/common';
import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { Produto } from "../entities/produto.entity";

@Controller("/produtos")
export class ProdutoController {
    constructor(private readonly produtoService: ProdutoService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produto[]> {
        return this.produtoService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
        return this.produtoService.findById(id);
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome: string): Promise<Produto[]> {
        return this.produtoService.findByNome(nome);
    }
}
