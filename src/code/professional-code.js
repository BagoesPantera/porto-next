const professionalCode = `<?php

class ProfessionalProjectsController extends Controller
{
    public function index()
    {
        $projects = [
            [
                "name" => "SIDBANKUM",
                "stack" => "Laravel",
                "description" => "Legal aid information system for the Bali Provincial Government: beneficiary applications, verification, and approvals.",
            ],
            [
                "name" => "Billiard Management System",
                "stack" => "Laravel + Raspberry Pi",
                "description" => "Booking, billing, F&B and membership management with IoT table lighting.",
            ],
            [
                "name" => "Smart UMKM",
                "stack" => "Laravel Filament",
                "description" => "E-learning and management platform: materials, assignments, submissions, authentication and role-based access.",
            ],
        ];

        return view("professional", compact("projects"));
    }
}
`
export default professionalCode;