using Backend.Data;
using Backend.Mapping;
using Microsoft.EntityFrameworkCore;
using System.Runtime.Intrinsics.Arm;



var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();

builder.Services.AddOpenApi();

builder.Services.AddSwaggerGen();



builder.Services.AddDbContext<TipoviAutaContext>(options => {
    options.UseSqlServer(builder.Configuration.GetConnectionString("TipoviAutaContext"));
});



builder.Services.AddCors(o => {

    o.AddPolicy("CorsPolicy", builder =>
    {
        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });

});


builder.Services.AddAutoMapper(typeof(BackendMappingProfile));


var app = builder.Build();


app.MapOpenApi();


app.UseHttpsRedirection();

app.UseAuthorization();


app.UseSwagger();
app.UseSwaggerUI(o => {
    o.EnableTryItOutByDefault();
    o.ConfigObject.AdditionalItems.Add("requestSnippetsEnabled", true);
});

app.MapControllers();

app.UseCors("CorsPolicy");


app.UseStaticFiles();
app.UseDefaultFiles();
app.MapFallbackToFile("index.html");

app.Run();

