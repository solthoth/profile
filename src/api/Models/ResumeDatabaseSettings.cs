namespace api.Models
{
  public interface IResumeDatabaseSettings
  {
    public string ResumeCollectionName { get; set; }
    public string ConnectionString { get; set; }
    public string DatabaseName { get; set; }
  }

  public class ResumeDatabaseSettings : IResumeDatabaseSettings
  {
    public string ResumeCollectionName { get; set; } = string.Empty;
    public string ConnectionString { get; set; } = string.Empty;
    public string DatabaseName { get; set; } = string.Empty;
  }


}
