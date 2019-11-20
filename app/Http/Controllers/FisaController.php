<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PDOException;

class FisaController extends Controller
{
    //

    public function createFisa(int $id, bool $swap)
    {
        try {
            if (! DB::table(env('FISE_TABLE'))->where('id_fisa_s1', $id)->count() )  {
                DB::table(env('FISE_TABLE'))->insert(
                    ['id_fisa_s1' => $id, 'doreste_swap' => $swap]
                );
            }
            else
            {
                DB::table(env('FISE_TABLE'))
                    ->where('id_fisa', $id)
                    ->update(
                        ['doreste_swap' => $swap]
                    );
            }


            return response([], 201);
        }
        catch (PDOException $exception)
        {
            return response($exception->getMessage());
        }
    }

    public function selectSwap(int $id)
    {
        try
        {
            $swap = DB::table(env('FISE_TABLE'))->where('id_fisa_s1', $id)->select('doreste_swap')->limit(1)->get();

            if (count($swap) == 0)
            {
                $swap = 0;
            }
            else
            {
                $swap = $swap[0]->doreste_swap;
            }
            return response(['swap' => $swap], 201);

        }
        catch (PDOException $exception)
        {
            return response($exception->getMessage());
        }
    }

}
